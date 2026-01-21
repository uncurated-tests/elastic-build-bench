'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14488<T> = T extends (infer U)[]
  ? DeepReadonlyArray14488<U>
  : T extends object
  ? DeepReadonlyObject14488<T>
  : T;

interface DeepReadonlyArray14488<T> extends ReadonlyArray<DeepReadonly14488<T>> {}

type DeepReadonlyObject14488<T> = {
  readonly [P in keyof T]: DeepReadonly14488<T[P]>;
};

type UnionToIntersection14488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14488<T> = UnionToIntersection14488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14488<T extends unknown[], V> = [...T, V];

type TuplifyUnion14488<T, L = LastOf14488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14488<TuplifyUnion14488<Exclude<T, L>>, L>;

type DeepPartial14488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14488<T[P]> }
  : T;

type Paths14488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14488<K, Paths14488<T[K], Prev14488[D]>> : never }[keyof T]
  : never;

type Prev14488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14488 {
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

type ConfigPaths14488 = Paths14488<NestedConfig14488>;

interface HeavyProps14488 {
  config: DeepPartial14488<NestedConfig14488>;
  path?: ConfigPaths14488;
}

const HeavyComponent14488 = memo(function HeavyComponent14488({ config }: HeavyProps14488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14488.displayName = 'HeavyComponent14488';
export default HeavyComponent14488;
