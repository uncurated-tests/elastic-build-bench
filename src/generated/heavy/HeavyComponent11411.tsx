'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11411<T> = T extends (infer U)[]
  ? DeepReadonlyArray11411<U>
  : T extends object
  ? DeepReadonlyObject11411<T>
  : T;

interface DeepReadonlyArray11411<T> extends ReadonlyArray<DeepReadonly11411<T>> {}

type DeepReadonlyObject11411<T> = {
  readonly [P in keyof T]: DeepReadonly11411<T[P]>;
};

type UnionToIntersection11411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11411<T> = UnionToIntersection11411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11411<T extends unknown[], V> = [...T, V];

type TuplifyUnion11411<T, L = LastOf11411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11411<TuplifyUnion11411<Exclude<T, L>>, L>;

type DeepPartial11411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11411<T[P]> }
  : T;

type Paths11411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11411<K, Paths11411<T[K], Prev11411[D]>> : never }[keyof T]
  : never;

type Prev11411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11411 {
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

type ConfigPaths11411 = Paths11411<NestedConfig11411>;

interface HeavyProps11411 {
  config: DeepPartial11411<NestedConfig11411>;
  path?: ConfigPaths11411;
}

const HeavyComponent11411 = memo(function HeavyComponent11411({ config }: HeavyProps11411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11411.displayName = 'HeavyComponent11411';
export default HeavyComponent11411;
