'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly958<T> = T extends (infer U)[]
  ? DeepReadonlyArray958<U>
  : T extends object
  ? DeepReadonlyObject958<T>
  : T;

interface DeepReadonlyArray958<T> extends ReadonlyArray<DeepReadonly958<T>> {}

type DeepReadonlyObject958<T> = {
  readonly [P in keyof T]: DeepReadonly958<T[P]>;
};

type UnionToIntersection958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf958<T> = UnionToIntersection958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push958<T extends unknown[], V> = [...T, V];

type TuplifyUnion958<T, L = LastOf958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push958<TuplifyUnion958<Exclude<T, L>>, L>;

type DeepPartial958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial958<T[P]> }
  : T;

type Paths958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join958<K, Paths958<T[K], Prev958[D]>> : never }[keyof T]
  : never;

type Prev958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig958 {
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

type ConfigPaths958 = Paths958<NestedConfig958>;

interface HeavyProps958 {
  config: DeepPartial958<NestedConfig958>;
  path?: ConfigPaths958;
}

const HeavyComponent958 = memo(function HeavyComponent958({ config }: HeavyProps958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent958.displayName = 'HeavyComponent958';
export default HeavyComponent958;
