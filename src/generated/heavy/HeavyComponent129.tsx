'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly129<T> = T extends (infer U)[]
  ? DeepReadonlyArray129<U>
  : T extends object
  ? DeepReadonlyObject129<T>
  : T;

interface DeepReadonlyArray129<T> extends ReadonlyArray<DeepReadonly129<T>> {}

type DeepReadonlyObject129<T> = {
  readonly [P in keyof T]: DeepReadonly129<T[P]>;
};

type UnionToIntersection129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf129<T> = UnionToIntersection129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push129<T extends unknown[], V> = [...T, V];

type TuplifyUnion129<T, L = LastOf129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push129<TuplifyUnion129<Exclude<T, L>>, L>;

type DeepPartial129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial129<T[P]> }
  : T;

type Paths129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join129<K, Paths129<T[K], Prev129[D]>> : never }[keyof T]
  : never;

type Prev129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig129 {
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

type ConfigPaths129 = Paths129<NestedConfig129>;

interface HeavyProps129 {
  config: DeepPartial129<NestedConfig129>;
  path?: ConfigPaths129;
}

const HeavyComponent129 = memo(function HeavyComponent129({ config }: HeavyProps129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent129.displayName = 'HeavyComponent129';
export default HeavyComponent129;
