'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11980<T> = T extends (infer U)[]
  ? DeepReadonlyArray11980<U>
  : T extends object
  ? DeepReadonlyObject11980<T>
  : T;

interface DeepReadonlyArray11980<T> extends ReadonlyArray<DeepReadonly11980<T>> {}

type DeepReadonlyObject11980<T> = {
  readonly [P in keyof T]: DeepReadonly11980<T[P]>;
};

type UnionToIntersection11980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11980<T> = UnionToIntersection11980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11980<T extends unknown[], V> = [...T, V];

type TuplifyUnion11980<T, L = LastOf11980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11980<TuplifyUnion11980<Exclude<T, L>>, L>;

type DeepPartial11980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11980<T[P]> }
  : T;

type Paths11980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11980<K, Paths11980<T[K], Prev11980[D]>> : never }[keyof T]
  : never;

type Prev11980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11980 {
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

type ConfigPaths11980 = Paths11980<NestedConfig11980>;

interface HeavyProps11980 {
  config: DeepPartial11980<NestedConfig11980>;
  path?: ConfigPaths11980;
}

const HeavyComponent11980 = memo(function HeavyComponent11980({ config }: HeavyProps11980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11980.displayName = 'HeavyComponent11980';
export default HeavyComponent11980;
