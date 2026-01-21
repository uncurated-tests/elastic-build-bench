'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11823<T> = T extends (infer U)[]
  ? DeepReadonlyArray11823<U>
  : T extends object
  ? DeepReadonlyObject11823<T>
  : T;

interface DeepReadonlyArray11823<T> extends ReadonlyArray<DeepReadonly11823<T>> {}

type DeepReadonlyObject11823<T> = {
  readonly [P in keyof T]: DeepReadonly11823<T[P]>;
};

type UnionToIntersection11823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11823<T> = UnionToIntersection11823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11823<T extends unknown[], V> = [...T, V];

type TuplifyUnion11823<T, L = LastOf11823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11823<TuplifyUnion11823<Exclude<T, L>>, L>;

type DeepPartial11823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11823<T[P]> }
  : T;

type Paths11823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11823<K, Paths11823<T[K], Prev11823[D]>> : never }[keyof T]
  : never;

type Prev11823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11823 {
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

type ConfigPaths11823 = Paths11823<NestedConfig11823>;

interface HeavyProps11823 {
  config: DeepPartial11823<NestedConfig11823>;
  path?: ConfigPaths11823;
}

const HeavyComponent11823 = memo(function HeavyComponent11823({ config }: HeavyProps11823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11823.displayName = 'HeavyComponent11823';
export default HeavyComponent11823;
