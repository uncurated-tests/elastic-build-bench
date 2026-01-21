'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14594<T> = T extends (infer U)[]
  ? DeepReadonlyArray14594<U>
  : T extends object
  ? DeepReadonlyObject14594<T>
  : T;

interface DeepReadonlyArray14594<T> extends ReadonlyArray<DeepReadonly14594<T>> {}

type DeepReadonlyObject14594<T> = {
  readonly [P in keyof T]: DeepReadonly14594<T[P]>;
};

type UnionToIntersection14594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14594<T> = UnionToIntersection14594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14594<T extends unknown[], V> = [...T, V];

type TuplifyUnion14594<T, L = LastOf14594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14594<TuplifyUnion14594<Exclude<T, L>>, L>;

type DeepPartial14594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14594<T[P]> }
  : T;

type Paths14594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14594<K, Paths14594<T[K], Prev14594[D]>> : never }[keyof T]
  : never;

type Prev14594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14594 {
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

type ConfigPaths14594 = Paths14594<NestedConfig14594>;

interface HeavyProps14594 {
  config: DeepPartial14594<NestedConfig14594>;
  path?: ConfigPaths14594;
}

const HeavyComponent14594 = memo(function HeavyComponent14594({ config }: HeavyProps14594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14594.displayName = 'HeavyComponent14594';
export default HeavyComponent14594;
