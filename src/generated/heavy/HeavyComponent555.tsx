'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly555<T> = T extends (infer U)[]
  ? DeepReadonlyArray555<U>
  : T extends object
  ? DeepReadonlyObject555<T>
  : T;

interface DeepReadonlyArray555<T> extends ReadonlyArray<DeepReadonly555<T>> {}

type DeepReadonlyObject555<T> = {
  readonly [P in keyof T]: DeepReadonly555<T[P]>;
};

type UnionToIntersection555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf555<T> = UnionToIntersection555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push555<T extends unknown[], V> = [...T, V];

type TuplifyUnion555<T, L = LastOf555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push555<TuplifyUnion555<Exclude<T, L>>, L>;

type DeepPartial555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial555<T[P]> }
  : T;

type Paths555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join555<K, Paths555<T[K], Prev555[D]>> : never }[keyof T]
  : never;

type Prev555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig555 {
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

type ConfigPaths555 = Paths555<NestedConfig555>;

interface HeavyProps555 {
  config: DeepPartial555<NestedConfig555>;
  path?: ConfigPaths555;
}

const HeavyComponent555 = memo(function HeavyComponent555({ config }: HeavyProps555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent555.displayName = 'HeavyComponent555';
export default HeavyComponent555;
