'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14605<T> = T extends (infer U)[]
  ? DeepReadonlyArray14605<U>
  : T extends object
  ? DeepReadonlyObject14605<T>
  : T;

interface DeepReadonlyArray14605<T> extends ReadonlyArray<DeepReadonly14605<T>> {}

type DeepReadonlyObject14605<T> = {
  readonly [P in keyof T]: DeepReadonly14605<T[P]>;
};

type UnionToIntersection14605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14605<T> = UnionToIntersection14605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14605<T extends unknown[], V> = [...T, V];

type TuplifyUnion14605<T, L = LastOf14605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14605<TuplifyUnion14605<Exclude<T, L>>, L>;

type DeepPartial14605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14605<T[P]> }
  : T;

type Paths14605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14605<K, Paths14605<T[K], Prev14605[D]>> : never }[keyof T]
  : never;

type Prev14605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14605 {
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

type ConfigPaths14605 = Paths14605<NestedConfig14605>;

interface HeavyProps14605 {
  config: DeepPartial14605<NestedConfig14605>;
  path?: ConfigPaths14605;
}

const HeavyComponent14605 = memo(function HeavyComponent14605({ config }: HeavyProps14605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14605.displayName = 'HeavyComponent14605';
export default HeavyComponent14605;
