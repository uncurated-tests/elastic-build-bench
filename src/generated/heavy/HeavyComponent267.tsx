'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly267<T> = T extends (infer U)[]
  ? DeepReadonlyArray267<U>
  : T extends object
  ? DeepReadonlyObject267<T>
  : T;

interface DeepReadonlyArray267<T> extends ReadonlyArray<DeepReadonly267<T>> {}

type DeepReadonlyObject267<T> = {
  readonly [P in keyof T]: DeepReadonly267<T[P]>;
};

type UnionToIntersection267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf267<T> = UnionToIntersection267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push267<T extends unknown[], V> = [...T, V];

type TuplifyUnion267<T, L = LastOf267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push267<TuplifyUnion267<Exclude<T, L>>, L>;

type DeepPartial267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial267<T[P]> }
  : T;

type Paths267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join267<K, Paths267<T[K], Prev267[D]>> : never }[keyof T]
  : never;

type Prev267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig267 {
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

type ConfigPaths267 = Paths267<NestedConfig267>;

interface HeavyProps267 {
  config: DeepPartial267<NestedConfig267>;
  path?: ConfigPaths267;
}

const HeavyComponent267 = memo(function HeavyComponent267({ config }: HeavyProps267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent267.displayName = 'HeavyComponent267';
export default HeavyComponent267;
