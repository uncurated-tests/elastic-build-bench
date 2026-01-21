'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11496<T> = T extends (infer U)[]
  ? DeepReadonlyArray11496<U>
  : T extends object
  ? DeepReadonlyObject11496<T>
  : T;

interface DeepReadonlyArray11496<T> extends ReadonlyArray<DeepReadonly11496<T>> {}

type DeepReadonlyObject11496<T> = {
  readonly [P in keyof T]: DeepReadonly11496<T[P]>;
};

type UnionToIntersection11496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11496<T> = UnionToIntersection11496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11496<T extends unknown[], V> = [...T, V];

type TuplifyUnion11496<T, L = LastOf11496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11496<TuplifyUnion11496<Exclude<T, L>>, L>;

type DeepPartial11496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11496<T[P]> }
  : T;

type Paths11496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11496<K, Paths11496<T[K], Prev11496[D]>> : never }[keyof T]
  : never;

type Prev11496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11496 {
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

type ConfigPaths11496 = Paths11496<NestedConfig11496>;

interface HeavyProps11496 {
  config: DeepPartial11496<NestedConfig11496>;
  path?: ConfigPaths11496;
}

const HeavyComponent11496 = memo(function HeavyComponent11496({ config }: HeavyProps11496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11496.displayName = 'HeavyComponent11496';
export default HeavyComponent11496;
