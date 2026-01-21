'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14956<T> = T extends (infer U)[]
  ? DeepReadonlyArray14956<U>
  : T extends object
  ? DeepReadonlyObject14956<T>
  : T;

interface DeepReadonlyArray14956<T> extends ReadonlyArray<DeepReadonly14956<T>> {}

type DeepReadonlyObject14956<T> = {
  readonly [P in keyof T]: DeepReadonly14956<T[P]>;
};

type UnionToIntersection14956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14956<T> = UnionToIntersection14956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14956<T extends unknown[], V> = [...T, V];

type TuplifyUnion14956<T, L = LastOf14956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14956<TuplifyUnion14956<Exclude<T, L>>, L>;

type DeepPartial14956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14956<T[P]> }
  : T;

type Paths14956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14956<K, Paths14956<T[K], Prev14956[D]>> : never }[keyof T]
  : never;

type Prev14956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14956 {
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

type ConfigPaths14956 = Paths14956<NestedConfig14956>;

interface HeavyProps14956 {
  config: DeepPartial14956<NestedConfig14956>;
  path?: ConfigPaths14956;
}

const HeavyComponent14956 = memo(function HeavyComponent14956({ config }: HeavyProps14956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14956.displayName = 'HeavyComponent14956';
export default HeavyComponent14956;
