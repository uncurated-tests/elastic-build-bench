'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14087<T> = T extends (infer U)[]
  ? DeepReadonlyArray14087<U>
  : T extends object
  ? DeepReadonlyObject14087<T>
  : T;

interface DeepReadonlyArray14087<T> extends ReadonlyArray<DeepReadonly14087<T>> {}

type DeepReadonlyObject14087<T> = {
  readonly [P in keyof T]: DeepReadonly14087<T[P]>;
};

type UnionToIntersection14087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14087<T> = UnionToIntersection14087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14087<T extends unknown[], V> = [...T, V];

type TuplifyUnion14087<T, L = LastOf14087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14087<TuplifyUnion14087<Exclude<T, L>>, L>;

type DeepPartial14087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14087<T[P]> }
  : T;

type Paths14087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14087<K, Paths14087<T[K], Prev14087[D]>> : never }[keyof T]
  : never;

type Prev14087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14087 {
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

type ConfigPaths14087 = Paths14087<NestedConfig14087>;

interface HeavyProps14087 {
  config: DeepPartial14087<NestedConfig14087>;
  path?: ConfigPaths14087;
}

const HeavyComponent14087 = memo(function HeavyComponent14087({ config }: HeavyProps14087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14087.displayName = 'HeavyComponent14087';
export default HeavyComponent14087;
