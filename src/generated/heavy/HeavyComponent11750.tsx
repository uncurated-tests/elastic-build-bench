'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11750<T> = T extends (infer U)[]
  ? DeepReadonlyArray11750<U>
  : T extends object
  ? DeepReadonlyObject11750<T>
  : T;

interface DeepReadonlyArray11750<T> extends ReadonlyArray<DeepReadonly11750<T>> {}

type DeepReadonlyObject11750<T> = {
  readonly [P in keyof T]: DeepReadonly11750<T[P]>;
};

type UnionToIntersection11750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11750<T> = UnionToIntersection11750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11750<T extends unknown[], V> = [...T, V];

type TuplifyUnion11750<T, L = LastOf11750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11750<TuplifyUnion11750<Exclude<T, L>>, L>;

type DeepPartial11750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11750<T[P]> }
  : T;

type Paths11750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11750<K, Paths11750<T[K], Prev11750[D]>> : never }[keyof T]
  : never;

type Prev11750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11750 {
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

type ConfigPaths11750 = Paths11750<NestedConfig11750>;

interface HeavyProps11750 {
  config: DeepPartial11750<NestedConfig11750>;
  path?: ConfigPaths11750;
}

const HeavyComponent11750 = memo(function HeavyComponent11750({ config }: HeavyProps11750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11750.displayName = 'HeavyComponent11750';
export default HeavyComponent11750;
