'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14988<T> = T extends (infer U)[]
  ? DeepReadonlyArray14988<U>
  : T extends object
  ? DeepReadonlyObject14988<T>
  : T;

interface DeepReadonlyArray14988<T> extends ReadonlyArray<DeepReadonly14988<T>> {}

type DeepReadonlyObject14988<T> = {
  readonly [P in keyof T]: DeepReadonly14988<T[P]>;
};

type UnionToIntersection14988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14988<T> = UnionToIntersection14988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14988<T extends unknown[], V> = [...T, V];

type TuplifyUnion14988<T, L = LastOf14988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14988<TuplifyUnion14988<Exclude<T, L>>, L>;

type DeepPartial14988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14988<T[P]> }
  : T;

type Paths14988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14988<K, Paths14988<T[K], Prev14988[D]>> : never }[keyof T]
  : never;

type Prev14988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14988 {
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

type ConfigPaths14988 = Paths14988<NestedConfig14988>;

interface HeavyProps14988 {
  config: DeepPartial14988<NestedConfig14988>;
  path?: ConfigPaths14988;
}

const HeavyComponent14988 = memo(function HeavyComponent14988({ config }: HeavyProps14988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14988.displayName = 'HeavyComponent14988';
export default HeavyComponent14988;
