'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14227<T> = T extends (infer U)[]
  ? DeepReadonlyArray14227<U>
  : T extends object
  ? DeepReadonlyObject14227<T>
  : T;

interface DeepReadonlyArray14227<T> extends ReadonlyArray<DeepReadonly14227<T>> {}

type DeepReadonlyObject14227<T> = {
  readonly [P in keyof T]: DeepReadonly14227<T[P]>;
};

type UnionToIntersection14227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14227<T> = UnionToIntersection14227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14227<T extends unknown[], V> = [...T, V];

type TuplifyUnion14227<T, L = LastOf14227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14227<TuplifyUnion14227<Exclude<T, L>>, L>;

type DeepPartial14227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14227<T[P]> }
  : T;

type Paths14227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14227<K, Paths14227<T[K], Prev14227[D]>> : never }[keyof T]
  : never;

type Prev14227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14227 {
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

type ConfigPaths14227 = Paths14227<NestedConfig14227>;

interface HeavyProps14227 {
  config: DeepPartial14227<NestedConfig14227>;
  path?: ConfigPaths14227;
}

const HeavyComponent14227 = memo(function HeavyComponent14227({ config }: HeavyProps14227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14227.displayName = 'HeavyComponent14227';
export default HeavyComponent14227;
