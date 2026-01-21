'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14766<T> = T extends (infer U)[]
  ? DeepReadonlyArray14766<U>
  : T extends object
  ? DeepReadonlyObject14766<T>
  : T;

interface DeepReadonlyArray14766<T> extends ReadonlyArray<DeepReadonly14766<T>> {}

type DeepReadonlyObject14766<T> = {
  readonly [P in keyof T]: DeepReadonly14766<T[P]>;
};

type UnionToIntersection14766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14766<T> = UnionToIntersection14766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14766<T extends unknown[], V> = [...T, V];

type TuplifyUnion14766<T, L = LastOf14766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14766<TuplifyUnion14766<Exclude<T, L>>, L>;

type DeepPartial14766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14766<T[P]> }
  : T;

type Paths14766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14766<K, Paths14766<T[K], Prev14766[D]>> : never }[keyof T]
  : never;

type Prev14766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14766 {
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

type ConfigPaths14766 = Paths14766<NestedConfig14766>;

interface HeavyProps14766 {
  config: DeepPartial14766<NestedConfig14766>;
  path?: ConfigPaths14766;
}

const HeavyComponent14766 = memo(function HeavyComponent14766({ config }: HeavyProps14766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14766.displayName = 'HeavyComponent14766';
export default HeavyComponent14766;
