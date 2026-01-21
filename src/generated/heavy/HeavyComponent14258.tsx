'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14258<T> = T extends (infer U)[]
  ? DeepReadonlyArray14258<U>
  : T extends object
  ? DeepReadonlyObject14258<T>
  : T;

interface DeepReadonlyArray14258<T> extends ReadonlyArray<DeepReadonly14258<T>> {}

type DeepReadonlyObject14258<T> = {
  readonly [P in keyof T]: DeepReadonly14258<T[P]>;
};

type UnionToIntersection14258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14258<T> = UnionToIntersection14258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14258<T extends unknown[], V> = [...T, V];

type TuplifyUnion14258<T, L = LastOf14258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14258<TuplifyUnion14258<Exclude<T, L>>, L>;

type DeepPartial14258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14258<T[P]> }
  : T;

type Paths14258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14258<K, Paths14258<T[K], Prev14258[D]>> : never }[keyof T]
  : never;

type Prev14258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14258 {
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

type ConfigPaths14258 = Paths14258<NestedConfig14258>;

interface HeavyProps14258 {
  config: DeepPartial14258<NestedConfig14258>;
  path?: ConfigPaths14258;
}

const HeavyComponent14258 = memo(function HeavyComponent14258({ config }: HeavyProps14258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14258.displayName = 'HeavyComponent14258';
export default HeavyComponent14258;
