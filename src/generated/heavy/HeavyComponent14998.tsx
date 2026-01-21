'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14998<T> = T extends (infer U)[]
  ? DeepReadonlyArray14998<U>
  : T extends object
  ? DeepReadonlyObject14998<T>
  : T;

interface DeepReadonlyArray14998<T> extends ReadonlyArray<DeepReadonly14998<T>> {}

type DeepReadonlyObject14998<T> = {
  readonly [P in keyof T]: DeepReadonly14998<T[P]>;
};

type UnionToIntersection14998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14998<T> = UnionToIntersection14998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14998<T extends unknown[], V> = [...T, V];

type TuplifyUnion14998<T, L = LastOf14998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14998<TuplifyUnion14998<Exclude<T, L>>, L>;

type DeepPartial14998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14998<T[P]> }
  : T;

type Paths14998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14998<K, Paths14998<T[K], Prev14998[D]>> : never }[keyof T]
  : never;

type Prev14998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14998 {
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

type ConfigPaths14998 = Paths14998<NestedConfig14998>;

interface HeavyProps14998 {
  config: DeepPartial14998<NestedConfig14998>;
  path?: ConfigPaths14998;
}

const HeavyComponent14998 = memo(function HeavyComponent14998({ config }: HeavyProps14998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14998.displayName = 'HeavyComponent14998';
export default HeavyComponent14998;
