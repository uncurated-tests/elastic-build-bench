'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11547<T> = T extends (infer U)[]
  ? DeepReadonlyArray11547<U>
  : T extends object
  ? DeepReadonlyObject11547<T>
  : T;

interface DeepReadonlyArray11547<T> extends ReadonlyArray<DeepReadonly11547<T>> {}

type DeepReadonlyObject11547<T> = {
  readonly [P in keyof T]: DeepReadonly11547<T[P]>;
};

type UnionToIntersection11547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11547<T> = UnionToIntersection11547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11547<T extends unknown[], V> = [...T, V];

type TuplifyUnion11547<T, L = LastOf11547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11547<TuplifyUnion11547<Exclude<T, L>>, L>;

type DeepPartial11547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11547<T[P]> }
  : T;

type Paths11547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11547<K, Paths11547<T[K], Prev11547[D]>> : never }[keyof T]
  : never;

type Prev11547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11547 {
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

type ConfigPaths11547 = Paths11547<NestedConfig11547>;

interface HeavyProps11547 {
  config: DeepPartial11547<NestedConfig11547>;
  path?: ConfigPaths11547;
}

const HeavyComponent11547 = memo(function HeavyComponent11547({ config }: HeavyProps11547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11547.displayName = 'HeavyComponent11547';
export default HeavyComponent11547;
