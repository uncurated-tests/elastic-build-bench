'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14077<T> = T extends (infer U)[]
  ? DeepReadonlyArray14077<U>
  : T extends object
  ? DeepReadonlyObject14077<T>
  : T;

interface DeepReadonlyArray14077<T> extends ReadonlyArray<DeepReadonly14077<T>> {}

type DeepReadonlyObject14077<T> = {
  readonly [P in keyof T]: DeepReadonly14077<T[P]>;
};

type UnionToIntersection14077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14077<T> = UnionToIntersection14077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14077<T extends unknown[], V> = [...T, V];

type TuplifyUnion14077<T, L = LastOf14077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14077<TuplifyUnion14077<Exclude<T, L>>, L>;

type DeepPartial14077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14077<T[P]> }
  : T;

type Paths14077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14077<K, Paths14077<T[K], Prev14077[D]>> : never }[keyof T]
  : never;

type Prev14077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14077 {
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

type ConfigPaths14077 = Paths14077<NestedConfig14077>;

interface HeavyProps14077 {
  config: DeepPartial14077<NestedConfig14077>;
  path?: ConfigPaths14077;
}

const HeavyComponent14077 = memo(function HeavyComponent14077({ config }: HeavyProps14077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14077.displayName = 'HeavyComponent14077';
export default HeavyComponent14077;
