'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly956<T> = T extends (infer U)[]
  ? DeepReadonlyArray956<U>
  : T extends object
  ? DeepReadonlyObject956<T>
  : T;

interface DeepReadonlyArray956<T> extends ReadonlyArray<DeepReadonly956<T>> {}

type DeepReadonlyObject956<T> = {
  readonly [P in keyof T]: DeepReadonly956<T[P]>;
};

type UnionToIntersection956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf956<T> = UnionToIntersection956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push956<T extends unknown[], V> = [...T, V];

type TuplifyUnion956<T, L = LastOf956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push956<TuplifyUnion956<Exclude<T, L>>, L>;

type DeepPartial956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial956<T[P]> }
  : T;

type Paths956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join956<K, Paths956<T[K], Prev956[D]>> : never }[keyof T]
  : never;

type Prev956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig956 {
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

type ConfigPaths956 = Paths956<NestedConfig956>;

interface HeavyProps956 {
  config: DeepPartial956<NestedConfig956>;
  path?: ConfigPaths956;
}

const HeavyComponent956 = memo(function HeavyComponent956({ config }: HeavyProps956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent956.displayName = 'HeavyComponent956';
export default HeavyComponent956;
