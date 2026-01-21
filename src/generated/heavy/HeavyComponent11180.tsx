'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11180<T> = T extends (infer U)[]
  ? DeepReadonlyArray11180<U>
  : T extends object
  ? DeepReadonlyObject11180<T>
  : T;

interface DeepReadonlyArray11180<T> extends ReadonlyArray<DeepReadonly11180<T>> {}

type DeepReadonlyObject11180<T> = {
  readonly [P in keyof T]: DeepReadonly11180<T[P]>;
};

type UnionToIntersection11180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11180<T> = UnionToIntersection11180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11180<T extends unknown[], V> = [...T, V];

type TuplifyUnion11180<T, L = LastOf11180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11180<TuplifyUnion11180<Exclude<T, L>>, L>;

type DeepPartial11180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11180<T[P]> }
  : T;

type Paths11180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11180<K, Paths11180<T[K], Prev11180[D]>> : never }[keyof T]
  : never;

type Prev11180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11180 {
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

type ConfigPaths11180 = Paths11180<NestedConfig11180>;

interface HeavyProps11180 {
  config: DeepPartial11180<NestedConfig11180>;
  path?: ConfigPaths11180;
}

const HeavyComponent11180 = memo(function HeavyComponent11180({ config }: HeavyProps11180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11180.displayName = 'HeavyComponent11180';
export default HeavyComponent11180;
