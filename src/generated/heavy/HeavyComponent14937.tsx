'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14937<T> = T extends (infer U)[]
  ? DeepReadonlyArray14937<U>
  : T extends object
  ? DeepReadonlyObject14937<T>
  : T;

interface DeepReadonlyArray14937<T> extends ReadonlyArray<DeepReadonly14937<T>> {}

type DeepReadonlyObject14937<T> = {
  readonly [P in keyof T]: DeepReadonly14937<T[P]>;
};

type UnionToIntersection14937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14937<T> = UnionToIntersection14937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14937<T extends unknown[], V> = [...T, V];

type TuplifyUnion14937<T, L = LastOf14937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14937<TuplifyUnion14937<Exclude<T, L>>, L>;

type DeepPartial14937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14937<T[P]> }
  : T;

type Paths14937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14937<K, Paths14937<T[K], Prev14937[D]>> : never }[keyof T]
  : never;

type Prev14937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14937 {
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

type ConfigPaths14937 = Paths14937<NestedConfig14937>;

interface HeavyProps14937 {
  config: DeepPartial14937<NestedConfig14937>;
  path?: ConfigPaths14937;
}

const HeavyComponent14937 = memo(function HeavyComponent14937({ config }: HeavyProps14937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14937.displayName = 'HeavyComponent14937';
export default HeavyComponent14937;
