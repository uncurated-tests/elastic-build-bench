'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11274<T> = T extends (infer U)[]
  ? DeepReadonlyArray11274<U>
  : T extends object
  ? DeepReadonlyObject11274<T>
  : T;

interface DeepReadonlyArray11274<T> extends ReadonlyArray<DeepReadonly11274<T>> {}

type DeepReadonlyObject11274<T> = {
  readonly [P in keyof T]: DeepReadonly11274<T[P]>;
};

type UnionToIntersection11274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11274<T> = UnionToIntersection11274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11274<T extends unknown[], V> = [...T, V];

type TuplifyUnion11274<T, L = LastOf11274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11274<TuplifyUnion11274<Exclude<T, L>>, L>;

type DeepPartial11274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11274<T[P]> }
  : T;

type Paths11274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11274<K, Paths11274<T[K], Prev11274[D]>> : never }[keyof T]
  : never;

type Prev11274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11274 {
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

type ConfigPaths11274 = Paths11274<NestedConfig11274>;

interface HeavyProps11274 {
  config: DeepPartial11274<NestedConfig11274>;
  path?: ConfigPaths11274;
}

const HeavyComponent11274 = memo(function HeavyComponent11274({ config }: HeavyProps11274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11274.displayName = 'HeavyComponent11274';
export default HeavyComponent11274;
