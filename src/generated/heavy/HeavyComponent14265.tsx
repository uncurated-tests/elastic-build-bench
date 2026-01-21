'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14265<T> = T extends (infer U)[]
  ? DeepReadonlyArray14265<U>
  : T extends object
  ? DeepReadonlyObject14265<T>
  : T;

interface DeepReadonlyArray14265<T> extends ReadonlyArray<DeepReadonly14265<T>> {}

type DeepReadonlyObject14265<T> = {
  readonly [P in keyof T]: DeepReadonly14265<T[P]>;
};

type UnionToIntersection14265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14265<T> = UnionToIntersection14265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14265<T extends unknown[], V> = [...T, V];

type TuplifyUnion14265<T, L = LastOf14265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14265<TuplifyUnion14265<Exclude<T, L>>, L>;

type DeepPartial14265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14265<T[P]> }
  : T;

type Paths14265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14265<K, Paths14265<T[K], Prev14265[D]>> : never }[keyof T]
  : never;

type Prev14265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14265 {
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

type ConfigPaths14265 = Paths14265<NestedConfig14265>;

interface HeavyProps14265 {
  config: DeepPartial14265<NestedConfig14265>;
  path?: ConfigPaths14265;
}

const HeavyComponent14265 = memo(function HeavyComponent14265({ config }: HeavyProps14265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14265.displayName = 'HeavyComponent14265';
export default HeavyComponent14265;
