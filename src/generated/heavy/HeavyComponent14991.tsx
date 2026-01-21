'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14991<T> = T extends (infer U)[]
  ? DeepReadonlyArray14991<U>
  : T extends object
  ? DeepReadonlyObject14991<T>
  : T;

interface DeepReadonlyArray14991<T> extends ReadonlyArray<DeepReadonly14991<T>> {}

type DeepReadonlyObject14991<T> = {
  readonly [P in keyof T]: DeepReadonly14991<T[P]>;
};

type UnionToIntersection14991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14991<T> = UnionToIntersection14991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14991<T extends unknown[], V> = [...T, V];

type TuplifyUnion14991<T, L = LastOf14991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14991<TuplifyUnion14991<Exclude<T, L>>, L>;

type DeepPartial14991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14991<T[P]> }
  : T;

type Paths14991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14991<K, Paths14991<T[K], Prev14991[D]>> : never }[keyof T]
  : never;

type Prev14991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14991 {
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

type ConfigPaths14991 = Paths14991<NestedConfig14991>;

interface HeavyProps14991 {
  config: DeepPartial14991<NestedConfig14991>;
  path?: ConfigPaths14991;
}

const HeavyComponent14991 = memo(function HeavyComponent14991({ config }: HeavyProps14991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14991.displayName = 'HeavyComponent14991';
export default HeavyComponent14991;
