'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14016<T> = T extends (infer U)[]
  ? DeepReadonlyArray14016<U>
  : T extends object
  ? DeepReadonlyObject14016<T>
  : T;

interface DeepReadonlyArray14016<T> extends ReadonlyArray<DeepReadonly14016<T>> {}

type DeepReadonlyObject14016<T> = {
  readonly [P in keyof T]: DeepReadonly14016<T[P]>;
};

type UnionToIntersection14016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14016<T> = UnionToIntersection14016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14016<T extends unknown[], V> = [...T, V];

type TuplifyUnion14016<T, L = LastOf14016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14016<TuplifyUnion14016<Exclude<T, L>>, L>;

type DeepPartial14016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14016<T[P]> }
  : T;

type Paths14016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14016<K, Paths14016<T[K], Prev14016[D]>> : never }[keyof T]
  : never;

type Prev14016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14016 {
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

type ConfigPaths14016 = Paths14016<NestedConfig14016>;

interface HeavyProps14016 {
  config: DeepPartial14016<NestedConfig14016>;
  path?: ConfigPaths14016;
}

const HeavyComponent14016 = memo(function HeavyComponent14016({ config }: HeavyProps14016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14016.displayName = 'HeavyComponent14016';
export default HeavyComponent14016;
