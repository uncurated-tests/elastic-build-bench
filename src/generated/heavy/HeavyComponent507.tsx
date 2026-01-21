'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly507<T> = T extends (infer U)[]
  ? DeepReadonlyArray507<U>
  : T extends object
  ? DeepReadonlyObject507<T>
  : T;

interface DeepReadonlyArray507<T> extends ReadonlyArray<DeepReadonly507<T>> {}

type DeepReadonlyObject507<T> = {
  readonly [P in keyof T]: DeepReadonly507<T[P]>;
};

type UnionToIntersection507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf507<T> = UnionToIntersection507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push507<T extends unknown[], V> = [...T, V];

type TuplifyUnion507<T, L = LastOf507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push507<TuplifyUnion507<Exclude<T, L>>, L>;

type DeepPartial507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial507<T[P]> }
  : T;

type Paths507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join507<K, Paths507<T[K], Prev507[D]>> : never }[keyof T]
  : never;

type Prev507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig507 {
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

type ConfigPaths507 = Paths507<NestedConfig507>;

interface HeavyProps507 {
  config: DeepPartial507<NestedConfig507>;
  path?: ConfigPaths507;
}

const HeavyComponent507 = memo(function HeavyComponent507({ config }: HeavyProps507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent507.displayName = 'HeavyComponent507';
export default HeavyComponent507;
