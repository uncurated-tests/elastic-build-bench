'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly390<T> = T extends (infer U)[]
  ? DeepReadonlyArray390<U>
  : T extends object
  ? DeepReadonlyObject390<T>
  : T;

interface DeepReadonlyArray390<T> extends ReadonlyArray<DeepReadonly390<T>> {}

type DeepReadonlyObject390<T> = {
  readonly [P in keyof T]: DeepReadonly390<T[P]>;
};

type UnionToIntersection390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf390<T> = UnionToIntersection390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push390<T extends unknown[], V> = [...T, V];

type TuplifyUnion390<T, L = LastOf390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push390<TuplifyUnion390<Exclude<T, L>>, L>;

type DeepPartial390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial390<T[P]> }
  : T;

type Paths390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join390<K, Paths390<T[K], Prev390[D]>> : never }[keyof T]
  : never;

type Prev390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig390 {
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

type ConfigPaths390 = Paths390<NestedConfig390>;

interface HeavyProps390 {
  config: DeepPartial390<NestedConfig390>;
  path?: ConfigPaths390;
}

const HeavyComponent390 = memo(function HeavyComponent390({ config }: HeavyProps390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent390.displayName = 'HeavyComponent390';
export default HeavyComponent390;
