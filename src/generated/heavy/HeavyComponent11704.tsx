'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11704<T> = T extends (infer U)[]
  ? DeepReadonlyArray11704<U>
  : T extends object
  ? DeepReadonlyObject11704<T>
  : T;

interface DeepReadonlyArray11704<T> extends ReadonlyArray<DeepReadonly11704<T>> {}

type DeepReadonlyObject11704<T> = {
  readonly [P in keyof T]: DeepReadonly11704<T[P]>;
};

type UnionToIntersection11704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11704<T> = UnionToIntersection11704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11704<T extends unknown[], V> = [...T, V];

type TuplifyUnion11704<T, L = LastOf11704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11704<TuplifyUnion11704<Exclude<T, L>>, L>;

type DeepPartial11704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11704<T[P]> }
  : T;

type Paths11704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11704<K, Paths11704<T[K], Prev11704[D]>> : never }[keyof T]
  : never;

type Prev11704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11704 {
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

type ConfigPaths11704 = Paths11704<NestedConfig11704>;

interface HeavyProps11704 {
  config: DeepPartial11704<NestedConfig11704>;
  path?: ConfigPaths11704;
}

const HeavyComponent11704 = memo(function HeavyComponent11704({ config }: HeavyProps11704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11704.displayName = 'HeavyComponent11704';
export default HeavyComponent11704;
