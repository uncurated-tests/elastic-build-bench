'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14388<T> = T extends (infer U)[]
  ? DeepReadonlyArray14388<U>
  : T extends object
  ? DeepReadonlyObject14388<T>
  : T;

interface DeepReadonlyArray14388<T> extends ReadonlyArray<DeepReadonly14388<T>> {}

type DeepReadonlyObject14388<T> = {
  readonly [P in keyof T]: DeepReadonly14388<T[P]>;
};

type UnionToIntersection14388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14388<T> = UnionToIntersection14388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14388<T extends unknown[], V> = [...T, V];

type TuplifyUnion14388<T, L = LastOf14388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14388<TuplifyUnion14388<Exclude<T, L>>, L>;

type DeepPartial14388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14388<T[P]> }
  : T;

type Paths14388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14388<K, Paths14388<T[K], Prev14388[D]>> : never }[keyof T]
  : never;

type Prev14388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14388 {
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

type ConfigPaths14388 = Paths14388<NestedConfig14388>;

interface HeavyProps14388 {
  config: DeepPartial14388<NestedConfig14388>;
  path?: ConfigPaths14388;
}

const HeavyComponent14388 = memo(function HeavyComponent14388({ config }: HeavyProps14388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14388.displayName = 'HeavyComponent14388';
export default HeavyComponent14388;
