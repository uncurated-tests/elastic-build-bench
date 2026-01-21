'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14735<T> = T extends (infer U)[]
  ? DeepReadonlyArray14735<U>
  : T extends object
  ? DeepReadonlyObject14735<T>
  : T;

interface DeepReadonlyArray14735<T> extends ReadonlyArray<DeepReadonly14735<T>> {}

type DeepReadonlyObject14735<T> = {
  readonly [P in keyof T]: DeepReadonly14735<T[P]>;
};

type UnionToIntersection14735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14735<T> = UnionToIntersection14735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14735<T extends unknown[], V> = [...T, V];

type TuplifyUnion14735<T, L = LastOf14735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14735<TuplifyUnion14735<Exclude<T, L>>, L>;

type DeepPartial14735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14735<T[P]> }
  : T;

type Paths14735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14735<K, Paths14735<T[K], Prev14735[D]>> : never }[keyof T]
  : never;

type Prev14735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14735 {
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

type ConfigPaths14735 = Paths14735<NestedConfig14735>;

interface HeavyProps14735 {
  config: DeepPartial14735<NestedConfig14735>;
  path?: ConfigPaths14735;
}

const HeavyComponent14735 = memo(function HeavyComponent14735({ config }: HeavyProps14735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14735.displayName = 'HeavyComponent14735';
export default HeavyComponent14735;
