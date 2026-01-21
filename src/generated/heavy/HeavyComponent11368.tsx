'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11368<T> = T extends (infer U)[]
  ? DeepReadonlyArray11368<U>
  : T extends object
  ? DeepReadonlyObject11368<T>
  : T;

interface DeepReadonlyArray11368<T> extends ReadonlyArray<DeepReadonly11368<T>> {}

type DeepReadonlyObject11368<T> = {
  readonly [P in keyof T]: DeepReadonly11368<T[P]>;
};

type UnionToIntersection11368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11368<T> = UnionToIntersection11368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11368<T extends unknown[], V> = [...T, V];

type TuplifyUnion11368<T, L = LastOf11368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11368<TuplifyUnion11368<Exclude<T, L>>, L>;

type DeepPartial11368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11368<T[P]> }
  : T;

type Paths11368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11368<K, Paths11368<T[K], Prev11368[D]>> : never }[keyof T]
  : never;

type Prev11368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11368 {
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

type ConfigPaths11368 = Paths11368<NestedConfig11368>;

interface HeavyProps11368 {
  config: DeepPartial11368<NestedConfig11368>;
  path?: ConfigPaths11368;
}

const HeavyComponent11368 = memo(function HeavyComponent11368({ config }: HeavyProps11368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11368.displayName = 'HeavyComponent11368';
export default HeavyComponent11368;
