'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14618<T> = T extends (infer U)[]
  ? DeepReadonlyArray14618<U>
  : T extends object
  ? DeepReadonlyObject14618<T>
  : T;

interface DeepReadonlyArray14618<T> extends ReadonlyArray<DeepReadonly14618<T>> {}

type DeepReadonlyObject14618<T> = {
  readonly [P in keyof T]: DeepReadonly14618<T[P]>;
};

type UnionToIntersection14618<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14618<T> = UnionToIntersection14618<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14618<T extends unknown[], V> = [...T, V];

type TuplifyUnion14618<T, L = LastOf14618<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14618<TuplifyUnion14618<Exclude<T, L>>, L>;

type DeepPartial14618<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14618<T[P]> }
  : T;

type Paths14618<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14618<K, Paths14618<T[K], Prev14618[D]>> : never }[keyof T]
  : never;

type Prev14618 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14618<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14618 {
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

type ConfigPaths14618 = Paths14618<NestedConfig14618>;

interface HeavyProps14618 {
  config: DeepPartial14618<NestedConfig14618>;
  path?: ConfigPaths14618;
}

const HeavyComponent14618 = memo(function HeavyComponent14618({ config }: HeavyProps14618) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14618) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14618 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14618: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14618.displayName = 'HeavyComponent14618';
export default HeavyComponent14618;
