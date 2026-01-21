'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14537<T> = T extends (infer U)[]
  ? DeepReadonlyArray14537<U>
  : T extends object
  ? DeepReadonlyObject14537<T>
  : T;

interface DeepReadonlyArray14537<T> extends ReadonlyArray<DeepReadonly14537<T>> {}

type DeepReadonlyObject14537<T> = {
  readonly [P in keyof T]: DeepReadonly14537<T[P]>;
};

type UnionToIntersection14537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14537<T> = UnionToIntersection14537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14537<T extends unknown[], V> = [...T, V];

type TuplifyUnion14537<T, L = LastOf14537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14537<TuplifyUnion14537<Exclude<T, L>>, L>;

type DeepPartial14537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14537<T[P]> }
  : T;

type Paths14537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14537<K, Paths14537<T[K], Prev14537[D]>> : never }[keyof T]
  : never;

type Prev14537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14537 {
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

type ConfigPaths14537 = Paths14537<NestedConfig14537>;

interface HeavyProps14537 {
  config: DeepPartial14537<NestedConfig14537>;
  path?: ConfigPaths14537;
}

const HeavyComponent14537 = memo(function HeavyComponent14537({ config }: HeavyProps14537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14537.displayName = 'HeavyComponent14537';
export default HeavyComponent14537;
