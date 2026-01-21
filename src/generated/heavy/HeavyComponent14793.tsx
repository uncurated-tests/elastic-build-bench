'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14793<T> = T extends (infer U)[]
  ? DeepReadonlyArray14793<U>
  : T extends object
  ? DeepReadonlyObject14793<T>
  : T;

interface DeepReadonlyArray14793<T> extends ReadonlyArray<DeepReadonly14793<T>> {}

type DeepReadonlyObject14793<T> = {
  readonly [P in keyof T]: DeepReadonly14793<T[P]>;
};

type UnionToIntersection14793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14793<T> = UnionToIntersection14793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14793<T extends unknown[], V> = [...T, V];

type TuplifyUnion14793<T, L = LastOf14793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14793<TuplifyUnion14793<Exclude<T, L>>, L>;

type DeepPartial14793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14793<T[P]> }
  : T;

type Paths14793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14793<K, Paths14793<T[K], Prev14793[D]>> : never }[keyof T]
  : never;

type Prev14793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14793 {
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

type ConfigPaths14793 = Paths14793<NestedConfig14793>;

interface HeavyProps14793 {
  config: DeepPartial14793<NestedConfig14793>;
  path?: ConfigPaths14793;
}

const HeavyComponent14793 = memo(function HeavyComponent14793({ config }: HeavyProps14793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14793.displayName = 'HeavyComponent14793';
export default HeavyComponent14793;
