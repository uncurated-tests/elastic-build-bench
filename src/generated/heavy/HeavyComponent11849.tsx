'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11849<T> = T extends (infer U)[]
  ? DeepReadonlyArray11849<U>
  : T extends object
  ? DeepReadonlyObject11849<T>
  : T;

interface DeepReadonlyArray11849<T> extends ReadonlyArray<DeepReadonly11849<T>> {}

type DeepReadonlyObject11849<T> = {
  readonly [P in keyof T]: DeepReadonly11849<T[P]>;
};

type UnionToIntersection11849<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11849<T> = UnionToIntersection11849<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11849<T extends unknown[], V> = [...T, V];

type TuplifyUnion11849<T, L = LastOf11849<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11849<TuplifyUnion11849<Exclude<T, L>>, L>;

type DeepPartial11849<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11849<T[P]> }
  : T;

type Paths11849<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11849<K, Paths11849<T[K], Prev11849[D]>> : never }[keyof T]
  : never;

type Prev11849 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11849<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11849 {
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

type ConfigPaths11849 = Paths11849<NestedConfig11849>;

interface HeavyProps11849 {
  config: DeepPartial11849<NestedConfig11849>;
  path?: ConfigPaths11849;
}

const HeavyComponent11849 = memo(function HeavyComponent11849({ config }: HeavyProps11849) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11849) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11849 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11849: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11849.displayName = 'HeavyComponent11849';
export default HeavyComponent11849;
