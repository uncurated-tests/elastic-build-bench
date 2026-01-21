'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly580<T> = T extends (infer U)[]
  ? DeepReadonlyArray580<U>
  : T extends object
  ? DeepReadonlyObject580<T>
  : T;

interface DeepReadonlyArray580<T> extends ReadonlyArray<DeepReadonly580<T>> {}

type DeepReadonlyObject580<T> = {
  readonly [P in keyof T]: DeepReadonly580<T[P]>;
};

type UnionToIntersection580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf580<T> = UnionToIntersection580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push580<T extends unknown[], V> = [...T, V];

type TuplifyUnion580<T, L = LastOf580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push580<TuplifyUnion580<Exclude<T, L>>, L>;

type DeepPartial580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial580<T[P]> }
  : T;

type Paths580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join580<K, Paths580<T[K], Prev580[D]>> : never }[keyof T]
  : never;

type Prev580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig580 {
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

type ConfigPaths580 = Paths580<NestedConfig580>;

interface HeavyProps580 {
  config: DeepPartial580<NestedConfig580>;
  path?: ConfigPaths580;
}

const HeavyComponent580 = memo(function HeavyComponent580({ config }: HeavyProps580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent580.displayName = 'HeavyComponent580';
export default HeavyComponent580;
