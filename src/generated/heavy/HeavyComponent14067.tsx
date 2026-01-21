'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14067<T> = T extends (infer U)[]
  ? DeepReadonlyArray14067<U>
  : T extends object
  ? DeepReadonlyObject14067<T>
  : T;

interface DeepReadonlyArray14067<T> extends ReadonlyArray<DeepReadonly14067<T>> {}

type DeepReadonlyObject14067<T> = {
  readonly [P in keyof T]: DeepReadonly14067<T[P]>;
};

type UnionToIntersection14067<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14067<T> = UnionToIntersection14067<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14067<T extends unknown[], V> = [...T, V];

type TuplifyUnion14067<T, L = LastOf14067<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14067<TuplifyUnion14067<Exclude<T, L>>, L>;

type DeepPartial14067<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14067<T[P]> }
  : T;

type Paths14067<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14067<K, Paths14067<T[K], Prev14067[D]>> : never }[keyof T]
  : never;

type Prev14067 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14067<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14067 {
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

type ConfigPaths14067 = Paths14067<NestedConfig14067>;

interface HeavyProps14067 {
  config: DeepPartial14067<NestedConfig14067>;
  path?: ConfigPaths14067;
}

const HeavyComponent14067 = memo(function HeavyComponent14067({ config }: HeavyProps14067) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14067) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14067 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14067: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14067.displayName = 'HeavyComponent14067';
export default HeavyComponent14067;
