'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14281<T> = T extends (infer U)[]
  ? DeepReadonlyArray14281<U>
  : T extends object
  ? DeepReadonlyObject14281<T>
  : T;

interface DeepReadonlyArray14281<T> extends ReadonlyArray<DeepReadonly14281<T>> {}

type DeepReadonlyObject14281<T> = {
  readonly [P in keyof T]: DeepReadonly14281<T[P]>;
};

type UnionToIntersection14281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14281<T> = UnionToIntersection14281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14281<T extends unknown[], V> = [...T, V];

type TuplifyUnion14281<T, L = LastOf14281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14281<TuplifyUnion14281<Exclude<T, L>>, L>;

type DeepPartial14281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14281<T[P]> }
  : T;

type Paths14281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14281<K, Paths14281<T[K], Prev14281[D]>> : never }[keyof T]
  : never;

type Prev14281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14281 {
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

type ConfigPaths14281 = Paths14281<NestedConfig14281>;

interface HeavyProps14281 {
  config: DeepPartial14281<NestedConfig14281>;
  path?: ConfigPaths14281;
}

const HeavyComponent14281 = memo(function HeavyComponent14281({ config }: HeavyProps14281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14281.displayName = 'HeavyComponent14281';
export default HeavyComponent14281;
