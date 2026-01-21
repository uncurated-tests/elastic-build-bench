'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1129<T> = T extends (infer U)[]
  ? DeepReadonlyArray1129<U>
  : T extends object
  ? DeepReadonlyObject1129<T>
  : T;

interface DeepReadonlyArray1129<T> extends ReadonlyArray<DeepReadonly1129<T>> {}

type DeepReadonlyObject1129<T> = {
  readonly [P in keyof T]: DeepReadonly1129<T[P]>;
};

type UnionToIntersection1129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1129<T> = UnionToIntersection1129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1129<T extends unknown[], V> = [...T, V];

type TuplifyUnion1129<T, L = LastOf1129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1129<TuplifyUnion1129<Exclude<T, L>>, L>;

type DeepPartial1129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1129<T[P]> }
  : T;

type Paths1129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1129<K, Paths1129<T[K], Prev1129[D]>> : never }[keyof T]
  : never;

type Prev1129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1129 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths1129 = Paths1129<NestedConfig1129>;

interface HeavyProps1129 {
  config: DeepPartial1129<NestedConfig1129>;
  path?: ConfigPaths1129;
}

const HeavyComponent1129 = memo(function HeavyComponent1129({ config }: HeavyProps1129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1129.displayName = 'HeavyComponent1129';
export default HeavyComponent1129;
