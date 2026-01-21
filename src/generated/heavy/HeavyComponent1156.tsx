'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1156<T> = T extends (infer U)[]
  ? DeepReadonlyArray1156<U>
  : T extends object
  ? DeepReadonlyObject1156<T>
  : T;

interface DeepReadonlyArray1156<T> extends ReadonlyArray<DeepReadonly1156<T>> {}

type DeepReadonlyObject1156<T> = {
  readonly [P in keyof T]: DeepReadonly1156<T[P]>;
};

type UnionToIntersection1156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1156<T> = UnionToIntersection1156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1156<T extends unknown[], V> = [...T, V];

type TuplifyUnion1156<T, L = LastOf1156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1156<TuplifyUnion1156<Exclude<T, L>>, L>;

type DeepPartial1156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1156<T[P]> }
  : T;

type Paths1156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1156<K, Paths1156<T[K], Prev1156[D]>> : never }[keyof T]
  : never;

type Prev1156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1156 {
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

type ConfigPaths1156 = Paths1156<NestedConfig1156>;

interface HeavyProps1156 {
  config: DeepPartial1156<NestedConfig1156>;
  path?: ConfigPaths1156;
}

const HeavyComponent1156 = memo(function HeavyComponent1156({ config }: HeavyProps1156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1156.displayName = 'HeavyComponent1156';
export default HeavyComponent1156;
