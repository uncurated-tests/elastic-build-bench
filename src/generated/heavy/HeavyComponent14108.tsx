'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14108<T> = T extends (infer U)[]
  ? DeepReadonlyArray14108<U>
  : T extends object
  ? DeepReadonlyObject14108<T>
  : T;

interface DeepReadonlyArray14108<T> extends ReadonlyArray<DeepReadonly14108<T>> {}

type DeepReadonlyObject14108<T> = {
  readonly [P in keyof T]: DeepReadonly14108<T[P]>;
};

type UnionToIntersection14108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14108<T> = UnionToIntersection14108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14108<T extends unknown[], V> = [...T, V];

type TuplifyUnion14108<T, L = LastOf14108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14108<TuplifyUnion14108<Exclude<T, L>>, L>;

type DeepPartial14108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14108<T[P]> }
  : T;

type Paths14108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14108<K, Paths14108<T[K], Prev14108[D]>> : never }[keyof T]
  : never;

type Prev14108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14108 {
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

type ConfigPaths14108 = Paths14108<NestedConfig14108>;

interface HeavyProps14108 {
  config: DeepPartial14108<NestedConfig14108>;
  path?: ConfigPaths14108;
}

const HeavyComponent14108 = memo(function HeavyComponent14108({ config }: HeavyProps14108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14108.displayName = 'HeavyComponent14108';
export default HeavyComponent14108;
