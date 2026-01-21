'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14795<T> = T extends (infer U)[]
  ? DeepReadonlyArray14795<U>
  : T extends object
  ? DeepReadonlyObject14795<T>
  : T;

interface DeepReadonlyArray14795<T> extends ReadonlyArray<DeepReadonly14795<T>> {}

type DeepReadonlyObject14795<T> = {
  readonly [P in keyof T]: DeepReadonly14795<T[P]>;
};

type UnionToIntersection14795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14795<T> = UnionToIntersection14795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14795<T extends unknown[], V> = [...T, V];

type TuplifyUnion14795<T, L = LastOf14795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14795<TuplifyUnion14795<Exclude<T, L>>, L>;

type DeepPartial14795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14795<T[P]> }
  : T;

type Paths14795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14795<K, Paths14795<T[K], Prev14795[D]>> : never }[keyof T]
  : never;

type Prev14795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14795 {
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

type ConfigPaths14795 = Paths14795<NestedConfig14795>;

interface HeavyProps14795 {
  config: DeepPartial14795<NestedConfig14795>;
  path?: ConfigPaths14795;
}

const HeavyComponent14795 = memo(function HeavyComponent14795({ config }: HeavyProps14795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14795.displayName = 'HeavyComponent14795';
export default HeavyComponent14795;
