'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11273<T> = T extends (infer U)[]
  ? DeepReadonlyArray11273<U>
  : T extends object
  ? DeepReadonlyObject11273<T>
  : T;

interface DeepReadonlyArray11273<T> extends ReadonlyArray<DeepReadonly11273<T>> {}

type DeepReadonlyObject11273<T> = {
  readonly [P in keyof T]: DeepReadonly11273<T[P]>;
};

type UnionToIntersection11273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11273<T> = UnionToIntersection11273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11273<T extends unknown[], V> = [...T, V];

type TuplifyUnion11273<T, L = LastOf11273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11273<TuplifyUnion11273<Exclude<T, L>>, L>;

type DeepPartial11273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11273<T[P]> }
  : T;

type Paths11273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11273<K, Paths11273<T[K], Prev11273[D]>> : never }[keyof T]
  : never;

type Prev11273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11273 {
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

type ConfigPaths11273 = Paths11273<NestedConfig11273>;

interface HeavyProps11273 {
  config: DeepPartial11273<NestedConfig11273>;
  path?: ConfigPaths11273;
}

const HeavyComponent11273 = memo(function HeavyComponent11273({ config }: HeavyProps11273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11273.displayName = 'HeavyComponent11273';
export default HeavyComponent11273;
