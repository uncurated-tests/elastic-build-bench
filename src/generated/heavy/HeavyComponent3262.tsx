'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3262<T> = T extends (infer U)[]
  ? DeepReadonlyArray3262<U>
  : T extends object
  ? DeepReadonlyObject3262<T>
  : T;

interface DeepReadonlyArray3262<T> extends ReadonlyArray<DeepReadonly3262<T>> {}

type DeepReadonlyObject3262<T> = {
  readonly [P in keyof T]: DeepReadonly3262<T[P]>;
};

type UnionToIntersection3262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3262<T> = UnionToIntersection3262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3262<T extends unknown[], V> = [...T, V];

type TuplifyUnion3262<T, L = LastOf3262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3262<TuplifyUnion3262<Exclude<T, L>>, L>;

type DeepPartial3262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3262<T[P]> }
  : T;

type Paths3262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3262<K, Paths3262<T[K], Prev3262[D]>> : never }[keyof T]
  : never;

type Prev3262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3262 {
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

type ConfigPaths3262 = Paths3262<NestedConfig3262>;

interface HeavyProps3262 {
  config: DeepPartial3262<NestedConfig3262>;
  path?: ConfigPaths3262;
}

const HeavyComponent3262 = memo(function HeavyComponent3262({ config }: HeavyProps3262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3262.displayName = 'HeavyComponent3262';
export default HeavyComponent3262;
