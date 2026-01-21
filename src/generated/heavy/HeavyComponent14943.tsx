'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14943<T> = T extends (infer U)[]
  ? DeepReadonlyArray14943<U>
  : T extends object
  ? DeepReadonlyObject14943<T>
  : T;

interface DeepReadonlyArray14943<T> extends ReadonlyArray<DeepReadonly14943<T>> {}

type DeepReadonlyObject14943<T> = {
  readonly [P in keyof T]: DeepReadonly14943<T[P]>;
};

type UnionToIntersection14943<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14943<T> = UnionToIntersection14943<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14943<T extends unknown[], V> = [...T, V];

type TuplifyUnion14943<T, L = LastOf14943<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14943<TuplifyUnion14943<Exclude<T, L>>, L>;

type DeepPartial14943<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14943<T[P]> }
  : T;

type Paths14943<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14943<K, Paths14943<T[K], Prev14943[D]>> : never }[keyof T]
  : never;

type Prev14943 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14943<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14943 {
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

type ConfigPaths14943 = Paths14943<NestedConfig14943>;

interface HeavyProps14943 {
  config: DeepPartial14943<NestedConfig14943>;
  path?: ConfigPaths14943;
}

const HeavyComponent14943 = memo(function HeavyComponent14943({ config }: HeavyProps14943) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14943) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14943 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14943: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14943.displayName = 'HeavyComponent14943';
export default HeavyComponent14943;
