'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11981<T> = T extends (infer U)[]
  ? DeepReadonlyArray11981<U>
  : T extends object
  ? DeepReadonlyObject11981<T>
  : T;

interface DeepReadonlyArray11981<T> extends ReadonlyArray<DeepReadonly11981<T>> {}

type DeepReadonlyObject11981<T> = {
  readonly [P in keyof T]: DeepReadonly11981<T[P]>;
};

type UnionToIntersection11981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11981<T> = UnionToIntersection11981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11981<T extends unknown[], V> = [...T, V];

type TuplifyUnion11981<T, L = LastOf11981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11981<TuplifyUnion11981<Exclude<T, L>>, L>;

type DeepPartial11981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11981<T[P]> }
  : T;

type Paths11981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11981<K, Paths11981<T[K], Prev11981[D]>> : never }[keyof T]
  : never;

type Prev11981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11981 {
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

type ConfigPaths11981 = Paths11981<NestedConfig11981>;

interface HeavyProps11981 {
  config: DeepPartial11981<NestedConfig11981>;
  path?: ConfigPaths11981;
}

const HeavyComponent11981 = memo(function HeavyComponent11981({ config }: HeavyProps11981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11981.displayName = 'HeavyComponent11981';
export default HeavyComponent11981;
