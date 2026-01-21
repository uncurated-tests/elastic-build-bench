'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly312<T> = T extends (infer U)[]
  ? DeepReadonlyArray312<U>
  : T extends object
  ? DeepReadonlyObject312<T>
  : T;

interface DeepReadonlyArray312<T> extends ReadonlyArray<DeepReadonly312<T>> {}

type DeepReadonlyObject312<T> = {
  readonly [P in keyof T]: DeepReadonly312<T[P]>;
};

type UnionToIntersection312<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf312<T> = UnionToIntersection312<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push312<T extends unknown[], V> = [...T, V];

type TuplifyUnion312<T, L = LastOf312<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push312<TuplifyUnion312<Exclude<T, L>>, L>;

type DeepPartial312<T> = T extends object
  ? { [P in keyof T]?: DeepPartial312<T[P]> }
  : T;

type Paths312<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join312<K, Paths312<T[K], Prev312[D]>> : never }[keyof T]
  : never;

type Prev312 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join312<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig312 {
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

type ConfigPaths312 = Paths312<NestedConfig312>;

interface HeavyProps312 {
  config: DeepPartial312<NestedConfig312>;
  path?: ConfigPaths312;
}

const HeavyComponent312 = memo(function HeavyComponent312({ config }: HeavyProps312) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 312) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-312 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H312: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent312.displayName = 'HeavyComponent312';
export default HeavyComponent312;
