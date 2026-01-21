'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14963<T> = T extends (infer U)[]
  ? DeepReadonlyArray14963<U>
  : T extends object
  ? DeepReadonlyObject14963<T>
  : T;

interface DeepReadonlyArray14963<T> extends ReadonlyArray<DeepReadonly14963<T>> {}

type DeepReadonlyObject14963<T> = {
  readonly [P in keyof T]: DeepReadonly14963<T[P]>;
};

type UnionToIntersection14963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14963<T> = UnionToIntersection14963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14963<T extends unknown[], V> = [...T, V];

type TuplifyUnion14963<T, L = LastOf14963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14963<TuplifyUnion14963<Exclude<T, L>>, L>;

type DeepPartial14963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14963<T[P]> }
  : T;

type Paths14963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14963<K, Paths14963<T[K], Prev14963[D]>> : never }[keyof T]
  : never;

type Prev14963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14963 {
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

type ConfigPaths14963 = Paths14963<NestedConfig14963>;

interface HeavyProps14963 {
  config: DeepPartial14963<NestedConfig14963>;
  path?: ConfigPaths14963;
}

const HeavyComponent14963 = memo(function HeavyComponent14963({ config }: HeavyProps14963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14963.displayName = 'HeavyComponent14963';
export default HeavyComponent14963;
