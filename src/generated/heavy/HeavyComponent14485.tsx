'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14485<T> = T extends (infer U)[]
  ? DeepReadonlyArray14485<U>
  : T extends object
  ? DeepReadonlyObject14485<T>
  : T;

interface DeepReadonlyArray14485<T> extends ReadonlyArray<DeepReadonly14485<T>> {}

type DeepReadonlyObject14485<T> = {
  readonly [P in keyof T]: DeepReadonly14485<T[P]>;
};

type UnionToIntersection14485<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14485<T> = UnionToIntersection14485<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14485<T extends unknown[], V> = [...T, V];

type TuplifyUnion14485<T, L = LastOf14485<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14485<TuplifyUnion14485<Exclude<T, L>>, L>;

type DeepPartial14485<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14485<T[P]> }
  : T;

type Paths14485<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14485<K, Paths14485<T[K], Prev14485[D]>> : never }[keyof T]
  : never;

type Prev14485 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14485<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14485 {
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

type ConfigPaths14485 = Paths14485<NestedConfig14485>;

interface HeavyProps14485 {
  config: DeepPartial14485<NestedConfig14485>;
  path?: ConfigPaths14485;
}

const HeavyComponent14485 = memo(function HeavyComponent14485({ config }: HeavyProps14485) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14485) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14485 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14485: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14485.displayName = 'HeavyComponent14485';
export default HeavyComponent14485;
