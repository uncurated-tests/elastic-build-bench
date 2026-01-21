'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14419<T> = T extends (infer U)[]
  ? DeepReadonlyArray14419<U>
  : T extends object
  ? DeepReadonlyObject14419<T>
  : T;

interface DeepReadonlyArray14419<T> extends ReadonlyArray<DeepReadonly14419<T>> {}

type DeepReadonlyObject14419<T> = {
  readonly [P in keyof T]: DeepReadonly14419<T[P]>;
};

type UnionToIntersection14419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14419<T> = UnionToIntersection14419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14419<T extends unknown[], V> = [...T, V];

type TuplifyUnion14419<T, L = LastOf14419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14419<TuplifyUnion14419<Exclude<T, L>>, L>;

type DeepPartial14419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14419<T[P]> }
  : T;

type Paths14419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14419<K, Paths14419<T[K], Prev14419[D]>> : never }[keyof T]
  : never;

type Prev14419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14419 {
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

type ConfigPaths14419 = Paths14419<NestedConfig14419>;

interface HeavyProps14419 {
  config: DeepPartial14419<NestedConfig14419>;
  path?: ConfigPaths14419;
}

const HeavyComponent14419 = memo(function HeavyComponent14419({ config }: HeavyProps14419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14419.displayName = 'HeavyComponent14419';
export default HeavyComponent14419;
