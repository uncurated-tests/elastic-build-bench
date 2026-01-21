'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11103<T> = T extends (infer U)[]
  ? DeepReadonlyArray11103<U>
  : T extends object
  ? DeepReadonlyObject11103<T>
  : T;

interface DeepReadonlyArray11103<T> extends ReadonlyArray<DeepReadonly11103<T>> {}

type DeepReadonlyObject11103<T> = {
  readonly [P in keyof T]: DeepReadonly11103<T[P]>;
};

type UnionToIntersection11103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11103<T> = UnionToIntersection11103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11103<T extends unknown[], V> = [...T, V];

type TuplifyUnion11103<T, L = LastOf11103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11103<TuplifyUnion11103<Exclude<T, L>>, L>;

type DeepPartial11103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11103<T[P]> }
  : T;

type Paths11103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11103<K, Paths11103<T[K], Prev11103[D]>> : never }[keyof T]
  : never;

type Prev11103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11103 {
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

type ConfigPaths11103 = Paths11103<NestedConfig11103>;

interface HeavyProps11103 {
  config: DeepPartial11103<NestedConfig11103>;
  path?: ConfigPaths11103;
}

const HeavyComponent11103 = memo(function HeavyComponent11103({ config }: HeavyProps11103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11103.displayName = 'HeavyComponent11103';
export default HeavyComponent11103;
